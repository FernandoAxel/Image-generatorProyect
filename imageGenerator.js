import express from 'express';
const router = express.Router();



router.get('/', (req, res) => {
    async function query(data) {
        const response = await fetch(
            "https://api-inference.huggingface.co/models/PixArt-alpha/PixArt-XL-2-1024-MS",
            {
                headers: { Authorization: "Bearer " + process.env.HF_ACCESS_TOKEN, },
                method: "POST",
                body: JSON.stringify(data),
            }
        );
        const result = await response.blob();
        return result;
    }
    query({"inputs": "Astronaut riding a horse"}).then((response) => {
        // Use image
        res.type(response.type);
        response.arrayBuffer().then((buffer)=> {
            res.send(Buffer.from(buffer))
        });
    });
});

export default router;