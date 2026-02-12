import pool from '../db/index.js'


export const addBook = async (req, res) => {
    const { title, author, published_year } = req.body;

    try {
        const result = await pool.query(
            'INSERT INTO books (title, author, published_year) VALUES ($1, $2, $3) RETURNING *',
            [title, author, published_year]
        );

        return res.status(201).json(result.rows[0]);

    } catch (err) {
        return res.status(500).json({ message: "error:" + err });
    }
};

export const editBook = async (req, res) => {
    const { id } = req.params;
    const { title, author, published_year } = req.body;

    try {
        const result = await pool.query(
            'UPDATE books SET title=$1, author=$2, published_year=$3 WHERE id=$4 RETURNING *',
            [title, author, published_year, id]
        );
        res.json(result.rows[0]);

    } catch (err) {
        return res.status(500).json({ message: "error:" + err });
    }
};

export const deleteBook = async (req, res) => {

    try {
        await pool.query('DELETE FROM books WHERE id = $1', [req.params.id]);
        res.sendStatus(204);
    } catch (err) {
        return res.status(500).json({ message: "error:" + err });
    }
};

export const showBook = async (req, res) => {
    try {
        const result = await pool.query('SELECT * FROM books');
        res.json(result.rows);

    } catch (err) {
        return res.status(500).json({ message: "error:" + err });
    }
};

export const showBookID = async (req, res) => {
    const { id } = req.params;

    try {
    const result = await pool.query('SELECT * FROM books WHERE id = $1', [id]);
    res.json(result.rows[0]);
    } catch (err) {
        return res.status(500).json({ message: "error:" + err });
    }
};