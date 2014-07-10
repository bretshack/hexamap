//This code taken from "Hexagon Grid Functions" on http://www.redblobgames.com/grids/hexagons.html (Copyright 2013 Red Blob Games <redblobgames@gmail.com>)

// (x, y) should be the center
// scale should be the distance from corner to corner
// orientation should be 0 (flat bottom hex) or 1 (flat side hex)
function hexToPolygon(scale, x, y, orientation) {
    // NOTE: the article says to use angles 0..300 or 30..330 (e.g. I
    // add 30 degrees for pointy top) but I instead use -30..270
    // (e.g. I subtract 30 degrees for pointy top) because it better
    // matches the animations I needed for my diagrams. They're
    // equivalent.
    var points = [];
    for (var i = 0; i < 6; i++) {
        var angle = 2 * Math.PI * (2 * i - orientation) / 12;
        points.push(new ScreenCoordinate(x + 0.5 * scale * Math.cos(angle),
        y + 0.5 * scale * Math.sin(angle)));
    }
    return points;
}

// The shape of a hexagon is fixed by the scale and orientation
function makeHexagonShape(scale, orientation) {
    var points = hexToPolygon(scale, 0, 0, orientation);
    var svg_coord = "";
    points.forEach(function(p) {
        svg_coord += p + " ";
    });
    return svg_coord;
}

/* A grid diagram will be an object with
   1. nodes = { cube: Cube object, key: string, node: d3 selection of <g> containing polygon }
   2. grid = Grid object
   3. root = d3 selection of root <g> of diagram
   4. polygons = d3 selection of the hexagons inside the <g> per tile
   5. update = function(scale, orientation) to call any time orientation changes, including initialization
   6. onLayout = callback function that will be called before an update (to assign new cube coordinates)
      - this will be called immediately on update
   7. onUpdate = callback function that will be called after an update
      - this will be called after a delay, and only if there hasn't been another update
      - since it may not be called, this function should only affect the visuals and not data
*/
function makeGridDiagram(svg, cubes) {
    var diagram = {};

    diagram.nodes = cubes.map(function(n) {
        return {cube: n,key: n.toString()};
    });
    diagram.root = svg.append('g');
    diagram.tiles = diagram.root.selectAll("g.tile").data(diagram.nodes, function(node) {
        return node.key;
    });
    diagram.tiles.enter()
    .append('g').attr('class', "tile")
    .each(function(d) {
        d.node = d3.select(this);
    });
    diagram.polygons = diagram.tiles.append('polygon');


    diagram.makeTilesSelectable = function(callback) {
        diagram.selected = d3.set();
        diagram.toggle = function(cube) {
            if (diagram.selected.has(cube)) {
                diagram.selected.remove(cube);
            } else {
                diagram.selected.add(cube);
            }
        };
        diagram.tiles
        .on('click', function(d) {
            d3.event.preventDefault();
            diagram.toggle(d.cube);
            callback();
        });
    // TODO: it'd be nice to be able to click and drag, or touch and drag
    };


    diagram.addLabels = function(labelFunction) {
        diagram.tiles.append('text')
        .attr('y', "0.4em")
        .text(function(d, i) {
            return labelFunction ? labelFunction(d, i) : "";
        });
        return diagram;
    };


    diagram.addHexCoordinates = function(converter, withMouseover) {
        diagram.nodes.forEach(function(n) {
            n.hex = converter(n.cube);
        });
        diagram.tiles.append('text')
        .attr('y', "0.4em")
        .each(function(d) {
            var selection = d3.select(this);
            selection.append('tspan').attr('class', "q").text(d.hex.q);
            selection.append('tspan').text(", ");
            selection.append('tspan').attr('class', "r").text(d.hex.r);
        });

        function setSelection(hex) {
            diagram.tiles
            .classed('q-axis-same', function(other) {
                return hex.q == other.hex.q;
            })
            .classed('r-axis-same', function(other) {
                return hex.r == other.hex.r;
            });
        }

        if (withMouseover) {
            diagram.tiles
            .on('mouseover', function(d) {
                setSelection(d.hex);
            })
            .on('touchstart', function(d) {
                setSelection(d.hex);
            });
        }

        return diagram;
    };


    diagram.addCubeCoordinates = function(withMouseover) {
        diagram.tiles.append('text')
        .each(function(d) {
            var selection = d3.select(this);
            var labels = d.cube.v;
            if (labels[0] == 0 && labels[1] == 0 && labels[2] == 0) {
                // Special case: label the origin with x/y/z so that you can tell where things to
                labels = ["x", "y", "z"];
            }
            selection.append('tspan').attr('class', "q").text(labels[0]);
            selection.append('tspan').attr('class', "s").text(labels[1]);
            selection.append('tspan').attr('class', "r").text(labels[2]);
        });

        function relocate() {
            var BL = 4; // adjust to vertically center
            var offsets = diagram.orientation ? [14, -9 + BL, -14, -9 + BL, 0, 13 + BL] : [13, 0 + BL, -9, -14 + BL, -9, 14 + BL];
            offsets = offsets.map(function(f) {
                return f * diagram.scale / 50;
            });
            diagram.tiles.select(".q").attr('x', offsets[0]).attr('y', offsets[1]);
            diagram.tiles.select(".s").attr('x', offsets[2]).attr('y', offsets[3]);
            diagram.tiles.select(".r").attr('x', offsets[4]).attr('y', offsets[5]);
        }

        function setSelection(cube) {
            ["q", "s", "r"].forEach(function(axis, i) {
                diagram.tiles.classed(axis + "-axis-same", function(other) {
                    return cube.v[i] == other.cube.v[i];
                });
            });
        }

        if (withMouseover) {
            diagram.tiles
            .on('mouseover', function(d) {
                return setSelection(d.cube);
            })
            .on('touchstart', function(d) {
                return setSelection(d.cube);
            })
        }

        diagram.onUpdate(relocate);
        return diagram;
    };


    var pre_callbacks = [];
    var post_callbacks = [];
    diagram.onLayout = function(callback) {
        pre_callbacks.push(callback);
    }
    diagram.onUpdate = function(callback) {
        post_callbacks.push(callback);
    }

    diagram.update = function(scale, orientation) {
        diagram.scale = scale;
        diagram.orientation = orientation;

        pre_callbacks.forEach(function(f) {
            f();
        });
        var grid = new Grid(scale, orientation, diagram.nodes.map(function(node) {
            return node.cube;
        }));
        var bounds = grid.bounds();
        var first_draw = !diagram.grid;
        diagram.grid = grid;
        var hexagon_points = makeHexagonShape(scale, orientation);

        delay(svg, function(animate) {
            if (first_draw) {
                animate = function(selection) {
                    return selection;
                };
            }

            // NOTE: In Webkit I can use svg.node().clientWidth but in Gecko that returns 0 :(
            diagram.translate = new ScreenCoordinate((parseFloat(svg.attr('width')) - bounds.minX - bounds.maxX) / 2,
            (parseFloat(svg.attr('height')) - bounds.minY - bounds.maxY) / 2);
            animate(diagram.root)
            .attr('transform', "translate(" + diagram.translate + ")");

            animate(diagram.tiles)
            .attr('transform', function(node) {
                var center = grid.hexToCenter(node.cube);
                return "translate(" + center.x + "," + center.y + ")";
            });

            animate(diagram.polygons)
            .attr('points', hexagon_points);

            post_callbacks.forEach(function(f) {
                f();
            });
        });

        return diagram;
    };

    return diagram;
}

var Std = function() {}

function $iterator(o) {
    if (o instanceof Array)
        return function() {
            return HxOverrides.iter(o);
        };
    return typeof (o.iterator) == 'function' ? $bind(o, o.iterator) : o.iterator;
}
;
var $_;
function $bind(o, m) {
    var f = function() {
        return f.method.apply(f.scope, arguments);
    };
    f.scope = o;
    f.method = m;
    return f;
}
;
Math.__name__ = ["Math"];
Math.NaN = Number.NaN;
Math.NEGATIVE_INFINITY = Number.NEGATIVE_INFINITY;
Math.POSITIVE_INFINITY = Number.POSITIVE_INFINITY;
Math.isFinite = function(i) {
    return isFinite(i);
};
Math.isNaN = function(i) {
    return isNaN(i);
};
Cube._directions = [[1, -1, 0], [1, 0, -1], [0, 1, -1], [-1, 1, 0], [-1, 0, 1], [0, -1, 1]];
Grid.SQRT_3_2 = Math.sqrt(3) / 2;
