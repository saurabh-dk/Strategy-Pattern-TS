/**
 * The Strategy interface declares operations common to all supported versions
 * of some algorithm.
 *
 * The client facing class uses this interface to call the algorithm defined by Concrete
 * Strategies.
 */
interface CompressionStrategy {
    compress(files: string[]): void;
}

/**
 * Concrete Strategies implement the algorithm while following the base Strategy
 * interface. The interface makes them interchangeable in the client facing class.
 */
class ZipCompression implements CompressionStrategy {
    public compress(files: string[]): void {
        console.log(`Compressing ${files.length} files using ZIP.`);
    }
}

class RarCompression implements CompressionStrategy {
    public compress(files: string[]): void {
        console.log(`Compressing ${files.length} files using RAR.`);
    }
}

/**
 * A client facing class that uses a compression strategy to compress files.
 * The strategy can be changed at runtime.
 */
class FileStorage {
    private files: string[] = [];

    /**
     * @type {CompressionStrategy} The FileStorage maintains a reference to one of the Strategy
     * objects. FileStorage does not know the concrete class of a strategy. It
     * should work with all strategies that implements Strategy interface correctly.
     */
    private compressionStrategy: CompressionStrategy;

    /**
     * The class accepts a strategy through the constructor, but also
     * provides a setter to change it at runtime.
     */
    constructor(compressionStrategy: CompressionStrategy) {
        this.compressionStrategy = compressionStrategy;
    }

    public addFile(file: string): void {
        this.files.push(file);
    }

    /**
     * Change the compression strategy at runtime.
     */
    public setCompressionStrategy(compressionStrategy: CompressionStrategy) {
        this.compressionStrategy = compressionStrategy;
    }

    /**
     * Execution of the currently set compression strategy.
     */
    public archive(): void {
        this.compressionStrategy.compress(this.files);
    }
}

// Example usage
const storage = new FileStorage(new ZipCompression());
storage.addFile('file1.txt');
storage.addFile('file2.txt');
storage.archive(); // Output: Compressing 2 files using ZIP.

storage.setCompressionStrategy(new RarCompression());
storage.archive(); // Output: Compressing 2 files using RAR.