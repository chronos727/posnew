// Initialize Workers KV
const STOCKS_NAMESPACE = '9a67e948831f4ec8a4e81596058aecb6'; // Replace with your actual Namespace ID
const stocks = new WorkersKV(STOCKS_NAMESPACE);

// Function to decrease stock quantity
async function decreaseStock(productName, quantity) {
    try {
        const currentStock = await stocks.get(productName);
        if (currentStock) {
            const updatedStock = Math.max(currentStock - quantity, 0);
            await stocks.put(productName, updatedStock);
        }
    } catch (error) {
        console.error('Error updating stock:', error);
    }
}

// Example usage when a purchase is made
const productName1 = 'Chicharon Bulaklak'; // Replace with the actual product name
const quantityPurchased1 = 1; // Example: user bought 1 item
decreaseStock(productName1, quantityPurchased1);

const productName2 = 'Tequila'; // Replace with the actual product name
const quantityPurchased2 = 1; // Example: user bought 1 item
decreaseStock(productName2, quantityPurchased2);

// Set initial stock level for Chicharon Bulaklak (example)
await stocks.put('Chicharon Bulaklak', 100); // Set an initial stock of 100
await stocks.put('Tequila', 100); // Set an initial stock of 100
