/// <reference types="mousetrap" />
import 'mousetrap';
/**
 * Service to intercept ctrl+s (or cmd+s on macOS) using a third-party library, called Mousetrap.
 */
export declare class KeyboardService {
    private mousetrap;
    constructor();
    /**
     * Method to add a lister for ctrl+s/cmd+s keyboard events.
     * @param onBind Callback function
     */
    add(onBind: (e: ExtendedKeyboardEvent, combo: string) => any): void;
    /**
     * Useful function to reset all listeners. Please, call this function when needed
     * to free resources ad prevent leaks.
     */
    reset(): void;
}
