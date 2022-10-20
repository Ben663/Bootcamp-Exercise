//import {} from './food'


const GRID_SIZE = 21

export function randomGridPosition() {
    return {
        x: Math.floor(math.random() * GRID_SIZE) + 1,
        y: Math.floor(math.random() * GRID_SIZE) + 1
        
    }
}