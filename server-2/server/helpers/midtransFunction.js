const midtransClient = require("midtrans-client");

const midtransFunction = async (user, amount) => {
    let snap = new midtransClient.Snap({
        // Set to true if you want Production Environment (accept real transaction).
        isProduction: false,
        serverKey: process.env.MIDTRANS_KEY,
    });

    let parameter = {
        transaction_details: {
            order_id:
                "YOUR-ORDERID-" + Math.floor(1000000 + Math.random() * 9000000),
            gross_amount: amount,
        },
        credit_card: {
            secure: true,
        },
        customer_details: {
            email: user.email,
        },
    };

    const midtransToken = await snap.createTransaction(parameter);
    console.log(midtransToken);
    return midtransToken;
};

module.exports = midtransFunction;
