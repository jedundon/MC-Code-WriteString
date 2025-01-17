/**
 * Make your agent write characters by placing blocks!
 */
//% color=195 weight=156 icon="\uf036" block="Writing"
namespace writer {

    const chars = [
        "001000101001010100011111110001100010000000000",
        "111101000110001111101000110001111100000000000",
        "011101000110000100001000010001011100000000000",
        "111001001010001100011000110010111000000000000",
        "111111000010000111111000010000111110000000000",
        "111111000010000111111000010000100000000000000",
        "011101000110000100111000110001011110000000000",
        "100011000110001111111000110001100010000000000",
        "011100010000100001000010000100011100000000000",
        "000010000100001000010000110001011100000000000",
        "100011001010100110001010010010100010000000000",
        "100001000010000100001000010000111110000000000",
        "100011101111011101011010110101100010000000000",
        "100011100110101101011010110011100010000000000",
        "011101000110001100011000110001011100000000000",
        "111101000110001111101000010000100000000000000",
        "011101000110001100011010110011011110000000000",
        "111101000110001111101010010010100010000000000",
        "011101000110000011100000110001011100000000000",
        "111110010000100001000010000100001000000000000",
        "100011000110001100011000110001011100000000000",
        "100011000110001010100101000100001000000000000",
        "101011010110101101011010110101010100000000000",
        "100010101000100010100101010001100010000000000",
        "100011000101010001000010000100001000000000000",
        "111110000100010001000100010000111110000000000",
        "000000000011110000010111110001011110000000000",
        "100001000011110100011000110001111100000000000",
        "000000000001110100011000010001011100000000000",
        "000010000101111100011000110001011110000000000",
        "000000000001110100011111010000011110000000000",
        "001100100001000011000100001000010000000000000",
        "000000000001111100011000110001011110000101110",
        "100001000010000111101000110001100010000000000",
        "001000000000100001000010000100001000000000000",
        "001000000000100001000010000100001000010001000",
        "100001000010010101001100010100100100000000000",
        "011000010000100001000010000100000100000000000",
        "000000000011010101011010110101101010000000000",
        "000000000011110100011000110001100010000000000",
        "000000000001110100011000110001011100000000000",
        "000000000011110100011000110001111101000010000",
        "000000000001111100011000110001011110000100001",
        "000000000001010011000100001000010000000000000",
        "000000000001111100000111000001111100000000000",
        "000000100001000011000100001000001100000000000",
        "000000000010001100011000110001011110000000000",
        "000000000010001100010101001010001000000000000",
        "000000000010101101011010110101010100000000000",
        "000000000010001010100010001010100010000000000",
        "000000000010001100011000110001011110000101110",
        "000000000011111000100010001000111110000000000",
        "011101000110011101011100110001011100000000000",
        "000100011001010000100001000010000100000000000",
        "011101000100001000100010001000111110000000000",
        "011101000100001001100000110001011100000000000",
        "000100011001010100101111100010000100000000000",
        "111111000011110000010000110001011100000000000",
        "011101000110000111101000110001011100000000000",
        "111110000100010000100010000100001000000000000",
        "011101000110001011101000110001011100000000000",
        "011101000110001011110000110001011100000000000",
        "000000000001101101100000000000000000000000000",
        "010000010000010000000000000000000000000000000",
        "001000010000100001000010000000001000000000000",
        "011101000110001000010110110101011110000000000",
        "010010111101001100101001011110100100000000000",
        "001000010001010010000010000010010100010000100",
        "110101101000100001000010001011010110000000000",
        "001000101010001000000000000000000000000000000",
        "011111000101010011001001010000011110000000000",
        "101010111000100011101010100000000000000000000",
        "000100010001000010000100000100000100000000000",
        "010000010000010000100001000100010000000000000",
        "000000000000000011100000000000000000000000000",
        "000000000000000000000000000000111110000000000",
        "000000010000100111110010000100000000000000000",
        "000000000011111000001111100000000000000000000",
        "001000010000100001000010000100001000000000000",
        "010000100000100001000010000010000100000000000",
        "000100010000100010000010000100000100000000000",
        "010000010000100000100010000100010000000000000",
        "011100100001000010000100001000011100000000000",
        "011100001000010000100001000010011100000000000",
        "000000000001100011000000001100011000000000000",
        "000000000001100011000000001100001000100000000",
        "010100101001010000000000000000000000000000000",
        "001000010000100000000000000000000000000000000",
        "000000000000011011001000001100000110000000000",
        "000000000011000001100000100110110000000000000",
        "000000000000000000000000001100001000100000000",
        "000000000000000000000000001100011000000000000",
        "011101000100010001000010000000001000000000000",
        "000100001000100001000010001000010000000000000",
        "011101000101100100100100100110100010111000000",
        "000000110110110000000110110110000000000000000",
        "001000010011111001000010000000111110000000000",
        "000110110010000011000001100000111110000000000",
        "110000011000001001101100000000111110000000000",
        "001000101001010001000000000000000000000000000",
        "111111000110001100011000110001111110000000000"
    ];

    const test = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789~`!@#$%^&*()-_+=|\\{}[]:;\"'<>,.?/§≈±≤≥°";

    //% block
    export function writeString(input: string = "Hello world! :)"): void {
        let x = 0, y = 0;

        function moveAgent(direction: SixDirection) {
            if (agent.detect(AgentDetection.Block, direction)) agent.destroy(direction);
            agent.move(direction, 1);
        }

        function placeBlock() {
            if (agent.detect(AgentDetection.Block, SixDirection.Forward)) agent.destroy(SixDirection.Forward);
            agent.place(SixDirection.Forward);
        }

        function writeChar(char: string, xcell: number) {
            if (char == " ") return;
            let actualChar = test.includes(char) ? test.indexOf(char) : 100;
            let toDraw: string = chars[actualChar];
            for (let i = 0; i < 45; i++) {
                if (toDraw[i] == '1') {
                    function goto(newX: number, newY: number) {
                        let xdir = newX > x ? SixDirection.Right : SixDirection.Left;
                        let ydir = newY > y ? SixDirection.Down : SixDirection.Up;
                        for (let k = 0; k < Math.abs(newX - x); k++) moveAgent(xdir);
                        for (let k = 0; k < Math.abs(newY - y); k++) moveAgent(ydir);
                        x = newX; y = newY;
                    }
                    goto(xcell * 6 + i % 5, Math.floor(i / 5));
                    placeBlock();
                }
            }
        }

        for (let j = 0; j < input.length; j++) {
            writeChar(input[j], j);
        }
    }

}

//% blockNamespace=Random color="#FF8000"
class FastRandomBlocks {
    _rng: Math.FastRandom

    constructor(seed: number) {
        this._rng = new Math.FastRandom(seed)
    }

    /**
     * Return the next number between 1 and 65535
     */
    //% block="$this next number"
    //% this.defl=rng
    //% blockId="fastrandomblocks_nextnumber"
    nextNumber() {
        return this._rng.next()
    }

    /**
     * Returns a random number between two numbers
     * @param minimum The minimum number, ex: 1
     * @param maximum The maximum number, ex: 10
     */
    //% block="$this random number between $minimum and $maximum"
    //% inlineInputMode=inline
    //% this.defl=rng
    //% blockId="fastrandomblocks_randomrange"
    randomRange(minimum: number, maximum: number) {
        return this._rng.randomRange(minimum, maximum)
    }

    /**
     * Returns a boolean based on the percent passed in
     * @param percent The percentage of the time the boolean returned will be true.
     */
    //% block="$this $percent percent chance "
    //% this.defl=rng
    //% blockId="fastrandomblocks_percentchance"
    percentChance(percent: number) {
        return this._rng.percentChance(percent)
    }

    /**
     * Returns a boolean with a 50% chance of being true
     */
    //% block="$this 50/50 chance"
    //% this.defl=rng
    //% blockId="fastrandomblocks_randomboolean"
    randomBoolean() {
        return this._rng.randomBool()
    }

    /**
     * Pick a random element from the array passed in
     * @param elements The array to choose from, ex: ["apples", "oranges", "pears"]
     */
    //% block="$this pick random from $elements"
    //% elements.shadow="lists_create_with"
    //% this.defl=rng
    //% blockId="fastrandomblocks_randomelement"
    randomElement(elements: any[]) {
        return this._rng.pickRandom(elements)
    }

    /**
     * Reset the RNG
     */
    //% block="reset $this"
    //% this.defl=rng
    //% blockId="fastrandomblocks_resetrng"
    resetRNG() {
        this._rng.reset()
    }
}


//% color="#FF8000"
namespace Random {
    /**
     * Create a RNG object
     * @param seed The seed for the RNG, ex: 1234. Using 0 as the seed may have unexpected results!!!
     */
    //% block="create RNG || with seed $seed"
    //% blockSetVariable=rng
    //% expandableArgumentMode="toggle"
    //% blockId="random_createrng"
    export function createRNG(seed: number = null): FastRandomBlocks {
        return new FastRandomBlocks(seed);
    }
}
