/**
 * This is a simple example of a class that can be used to store files.
 */
class FileStorage {
    private files: string[] = [];
    private compressionMethod: 'zip' | 'rar';

    /**
     * The class accepts a strategy through the constructor, 
     * but also provides a setter to change it at runtime.
    */
    constructor(compressionMethod: 'zip' | 'rar') {
        this.compressionMethod = compressionMethod;
    }

    public addFile(file: string): void {
        this.files.push(file);
    }

    /**
     * Change the compression strategy at runtime.
     */
    public setCompressionMethod(compressionMethod: 'zip' | 'rar') {
        this.compressionMethod = compressionMethod;
    }

    /**
     * Execution of the currently set compression strategy.
     * Notice how the class needs to know about the different compression methods.
    */
    public archive(): void {
        if (this.compressionMethod === 'zip') {
            console.log(`Compressing ${this.files.length} files using ZIP.`);
        } else if (this.compressionMethod === 'rar') {
            console.log(`Compressing ${this.files.length} files using RAR.`);
        }
    }
}

// Example usage
const storage = new FileStorage('zip');
storage.addFile('file1.txt');
storage.addFile('file2.txt');
storage.archive(); // Output: Compressing 2 files using ZIP.

storage.setCompressionMethod('rar');
storage.archive(); // Output: Compressing 2 files using RAR.