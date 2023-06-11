import cliSpinners, { SpinnerName } from 'cli-spinners';
export { default as spinners } from 'cli-spinners';

type Spinner = {
    readonly interval?: number;
    readonly frames: string[];
};
type Color = 'black' | 'red' | 'green' | 'yellow' | 'blue' | 'magenta' | 'cyan' | 'white' | 'gray';
type PrefixTextGenerator = () => string;
type SuffixTextGenerator = () => string;
type Options = {
    /**
    Text to display after the spinner.
    */
    readonly text?: string;
    /**
    Text or a function that returns text to display before the spinner. No prefix text will be displayed if set to an empty string.
    */
    readonly prefixText?: string | PrefixTextGenerator;
    /**
    Text or a function that returns text to display after the spinner text. No suffix text will be displayed if set to an empty string.
    */
    readonly suffixText?: string | SuffixTextGenerator;
    /**
    Name of one of the provided spinners. See [`example.js`](https://github.com/BendingBender/ora/blob/main/example.js) in this repo if you want to test out different spinners. On Windows, it will always use the line spinner as the Windows command-line doesn't have proper Unicode support.

    @default 'dots'

    Or an object like:

    @example
    ```
    {
        interval: 80, // Optional
        frames: ['-', '+', '-']
    }
    ```
    */
    readonly spinner?: SpinnerName | Spinner;
    /**
    The color of the spinner.

    @default 'cyan'
    */
    readonly color?: Color;
    /**
    Set to `false` to stop Ora from hiding the cursor.

    @default true
    */
    readonly hideCursor?: boolean;
    /**
    Indent the spinner with the given number of spaces.

    @default 0
    */
    readonly indent?: number;
    /**
    Interval between each frame.

    Spinners provide their own recommended interval, so you don't really need to specify this.

    Default: Provided by the spinner or `100`.
    */
    readonly interval?: number;
    /**
    Stream to write the output.

    You could for example set this to `process.stdout` instead.

    @default process.stderr
    */
    readonly stream?: NodeJS.WritableStream;
    /**
    Force enable/disable the spinner. If not specified, the spinner will be enabled if the `stream` is being run inside a TTY context (not spawned or piped) and/or not in a CI environment.

    Note that `{isEnabled: false}` doesn't mean it won't output anything. It just means it won't output the spinner, colors, and other ansi escape codes. It will still log text.
    */
    readonly isEnabled?: boolean;
    /**
    Disable the spinner and all log text. All output is suppressed and `isEnabled` will be considered `false`.

    @default false
    */
    readonly isSilent?: boolean;
    /**
    Discard stdin input (except Ctrl+C) while running if it's TTY. This prevents the spinner from twitching on input, outputting broken lines on `Enter` key presses, and prevents buffering of input while the spinner is running.

    This has no effect on Windows as there's no good way to implement discarding stdin properly there.

    @default true
    */
    readonly discardStdin?: boolean;
};
type PromiseOptions<T> = {
    /**
    The new text of the spinner when the promise is resolved.

    Keeps the existing text if `undefined`.
    */
    successText?: string | ((result: T) => string) | undefined;
    /**
    The new text of the spinner when the promise is rejected.

    Keeps the existing text if `undefined`.
    */
    failText?: string | ((error: Error) => string) | undefined;
} & Options;

declare class Ora {
    #private;
    color: string;
    _stream: any;
    _isEnabled: any;
    lastIndent: any;
    constructor(options: string | Options);
    get indent(): number | undefined;
    set indent(indent: number | undefined);
    get interval(): any;
    get spinner(): cliSpinners.SpinnerName | Spinner | undefined;
    set spinner(spinner: cliSpinners.SpinnerName | Spinner | undefined);
    get text(): string | undefined;
    set text(value: string | undefined);
    get prefixText(): string | PrefixTextGenerator | undefined;
    set prefixText(value: string | PrefixTextGenerator | undefined);
    get suffixText(): string | SuffixTextGenerator | undefined;
    set suffixText(value: string | SuffixTextGenerator | undefined);
    get isSpinning(): boolean;
    get isEnabled(): boolean;
    set isEnabled(value: boolean);
    get isSilent(): boolean;
    set isSilent(value: boolean);
    frame(): string;
    clear(): this;
    render(): this;
    start(text?: any): this;
    stop(): this;
    succeed(text?: string): this;
    fail(text?: string): this;
    warn(text?: string): this;
    info(text?: string): this;
    stopAndPersist(options?: any): this;
}
declare function ora(options: string | Options): Ora;
declare function oraPromise<T>(action: PromiseLike<T> | ((spinner: Ora) => PromiseLike<T>), options: string | PromiseOptions<T>): Promise<T>;

export { ora as default, oraPromise };
