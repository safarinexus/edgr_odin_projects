const ship = require('../ship/ship'); 

const gameboard = () => {   
    let grid = []; 
    for (let i = 0; i < 10; i++) {
        grid.push([]);
        for (let j = 0; j < 10; j++) {
            grid[i].push(0);
        }
    }

    const playerShips = [ship(5), ship(4), ship(3), ship(3), ship(2)]

    const checkFree = (shipLength, startX, startY, orientation) => {
        if (orientation === "horizontal") {
            if (startY + shipLength < 10) {
                for (let i = startY; i < startY + shipLength; i++) {
                    if (grid[startX][i] !== 0) {
                        return false;
                    }
                } 
                return true;
            } else {
                return false;
            }
        } else {
            if (startX + shipLength < 10) {
                for (let i = startX; i < startX + shipLength; i++) {
                    if (grid[i][startY] !== 0) {
                        return false;
                    }
                } 

                return true;
            } else {
                return false;
            }
        }
    }

    const checkAllShipsPlaced = () => {
        const countShips = grid.flat().filter(element => element !== 0).length;
        if (countShips === 17) {
            return true; 
        } else {
            return false;
        }
    }

    const placeShip = (ship, x, y, orientation="horizontal") => {
        if (checkFree(ship.length, x, y, orientation)) {
            if (orientation === "horizontal") {
                for (let i = y; i < y + ship.length; i++) {
                    grid[x][i] = ship; 
                }
                return true;
            } else {
                for (let i = x; i < x + ship.length; i++) {
                    grid[i][y] = ship; 
                }
                return true;
            }
        } else {
            return false; 
        }
    }

    const randomiseShips = () => {
        playerShips.forEach(ship => {
            const ori = Math.floor(Math.random() * 2);
            switch (ship.length) {
                case 5: 
                    if (ori === 0) {
                        const orientation = 'vertical'; 
                        let x = Math.floor(Math.random() * 6); 
                        let y = Math.floor(Math.random() * 10);
                        let check = checkFree(ship.length, x, y, orientation);
                        if (!check) {
                            while (!check) {
                                x = Math.floor(Math.random() * 6); 
                                y = Math.floor(Math.random() * 10);
                                check = checkFree(ship.length, x, y, orientation);
                            }
                        }
                        placeShip(ship, x, y, orientation);
                        break 
                    } else {
                        const orientation = 'horizontal'
                        let x = Math.floor(Math.random() * 10); 
                        let y = Math.floor(Math.random() * 6);
                        let check = checkFree(ship.length, x, y, orientation);
                        if (!check) {
                            while (!check) {
                                x = Math.floor(Math.random() * 6); 
                                y = Math.floor(Math.random() * 10);
                                check = checkFree(ship.length, x, y, orientation);
                            }
                        }
                        placeShip(ship, x, y, orientation);
                        break
                    }
                case 4: 
                    if (ori === 0) {
                        const orientation = 'vertical'; 
                        let x = Math.floor(Math.random() * 7); 
                        let y = Math.floor(Math.random() * 10);
                        let check = checkFree(ship.length, x, y, orientation);
                        if (!check) {
                            while (!check) {
                                x = Math.floor(Math.random() * 6); 
                                y = Math.floor(Math.random() * 10);
                                check = checkFree(ship.length, x, y, orientation);
                            }
                        }
                        placeShip(ship, x, y, orientation);
                        break
                    } else {       
                        const orientation = 'horizontal';              
                        let x = Math.floor(Math.random() * 10); 
                        let y = Math.floor(Math.random() * 7);
                        let check = checkFree(ship.length, x, y, orientation);
                        if (!check) {
                            while (!check) {
                                x = Math.floor(Math.random() * 6); 
                                y = Math.floor(Math.random() * 10);
                                check = checkFree(ship.length, x, y, orientation);
                            }
                        }
                        placeShip(ship, x, y, orientation);
                        break
                    }
                case 3: 
                    if (ori === 0) {
                        const orientation = 'vertical'; 
                        let x = Math.floor(Math.random() * 8); 
                        let y = Math.floor(Math.random() * 10);
                        let check = checkFree(ship.length, x, y, orientation);
                        if (!check) {
                            while (!check) {
                                x = Math.floor(Math.random() * 6); 
                                y = Math.floor(Math.random() * 10);
                                check = checkFree(ship.length, x, y, orientation);
                            }
                        }
                        placeShip(ship, x, y, orientation);
                        break
                    } else {
                        const orientation = 'horizontal';
                        let x = Math.floor(Math.random() * 10); 
                        let y = Math.floor(Math.random() * 8);
                        let check = checkFree(ship.length, x, y, orientation);
                        if (!check) {
                            while (!check) {
                                x = Math.floor(Math.random() * 6); 
                                y = Math.floor(Math.random() * 10);
                                check = checkFree(ship.length, x, y, orientation);
                            }
                        }
                        placeShip(ship, x, y, orientation);
                        break
                    }
                case 2: 
                    if (ori === 0) {
                        const orientation = 'vertical'; 
                        let x = Math.floor(Math.random() * 9); 
                        let y = Math.floor(Math.random() * 10);
                        let check = checkFree(ship.length, x, y, orientation);
                        if (!check) {
                            while (!check) {
                                x = Math.floor(Math.random() * 6); 
                                y = Math.floor(Math.random() * 10);
                                check = checkFree(ship.length, x, y, orientation);
                            }
                        }
                        placeShip(ship, x, y, orientation);
                        break
                    } else {
                        const orientation = 'horizontal';
                        let x = Math.floor(Math.random() * 10); 
                        let y = Math.floor(Math.random() * 9);
                        let check = checkFree(ship.length, x, y, orientation);
                        if (!check) {
                            while (!check) {
                                x = Math.floor(Math.random() * 6); 
                                y = Math.floor(Math.random() * 10);
                                check = checkFree(ship.length, x, y, orientation);
                            }
                        }
                        placeShip(ship, x, y, orientation);
                        break
                    }
            }
        })
    }

    const receiveAttack = (x, y) => {
        if (grid[x][y] === 0) {
            console.log('miss! at ' + x + " " + y);
            grid[x][y] = -1;
        } else if (grid[x][y] !== -1 && grid[x][y] !== 1) {
            console.log('hit! at ' + x + " " + y);
            grid[x][y].hit();
            grid[x][y] = 1;
        }
    }

    const validAttack = (x, y) => {
        if (grid[x][y] !== -1 && grid[x][y] !== 1) {
            return false; 
        } else {
            return true;
        }
    }

    const endCondition = () => {
        const noShips = grid.every(subArray => subArray.every(Number.isInteger)); 
        const played = grid.some(row => row.includes(1)); 
        if ((noShips && played)) {
            return true; 
        } else {
            return false;
        }
    }

    return {
        getGrid: () => grid, 
        getShips: () => playerShips, 
        placeShip, 
        checkAllShipsPlaced,
        receiveAttack, 
        endCondition,
        randomiseShips,
        validAttack,
    }
}

module.exports = gameboard;