const dir = [
    [0, 1],
    [1, 0],
    [0, -1],
    [-1, 0],
];

function walk(
    maze: string[],
    wall: string,
    curr: any,
    end: any,
    seen: boolean[][],
    path: any[],
) {
    //base case1 - out of bounds
    if (curr.x < 0 || curr.x >= maze[0].length) return false;
    if (curr.y < 0 || curr.y >= maze.length) return false;

    //base case2 - hit a wall
    if (maze[curr.y][curr.x] === wall) return false;

    //base case3 - hit the end
    if (curr.x === end.x && curr.y === end.y) {
        path.push(end);
        return true;
    }

    //base case4 - already seen
    if (seen[curr.y][curr.x]) return false;

    //3recurse
    //pre
    //recurse
    //post

    //pre
    seen[curr.y][curr.x] = true;
    path.push(curr);

    //recurse
    for (let i = 0; i < dir.length; ++i) {
        const [x, y] = dir[i];
        if (
            walk(
                maze,
                wall,
                {
                    x: curr.x + x,
                    y: curr.y + y,
                },
                end,
                seen,
                path,
            )
        ) {
            return true;
        }
    }

    //post
    path.pop();

    return false;
}

export default function solve(
    maze: string[],
    wall: string,
    start: any,
    end: any,
) {
    const seen: boolean[][] = [];
    const path: any[] = [];
    for (let i = 0; i < maze.length; ++i) {
        seen.push([]);
        for (let j = 0; j < maze[0].length; ++j) {
            seen.push(new Array(maze[0].length).fill(false));
        }
    }

    walk(maze, wall, start, end, seen, path);
    return path;
}

// o(n)
