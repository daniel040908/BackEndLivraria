import { db } from "../config/db.js"


export async function CriarLivros(req, res) {
    try {
        const { nome, email, senha, data_de_nascimento, celular, curso, perfil } = req.body;
        if (!nome || !email || !senha || !data_de_nascimento || !celular || !curso || !perfil)
            return res.status(400).json({ erro: "Campos obrigatórios" });

        await db.execute(
            "INSERT INTO usuarios (nome, email, senha, data_de_nascimento, curso, perfil) VALUES (?, ?, ?, ?, ?, ?)", [nome, email, senha, data_de_nascimento, celular, curso, perfil]
        );

        res.json({ mensagem: "Livro adcionado com sucesso!" });
    } catch (err) {
        res.status(500).json({ erro: err.message });
    }
};


export async function listarLivros(req, res) {
    try {
        const [rows] = await db.execute("SELECT * FROM livros");
        res.json(rows);
    } catch (err) {
        res.status(500).json({ erro: err.message });
    }
};


export async function buscarLivros(req, res) {
    try {
        const [rows] = await db.execute("SELECT * FROM livros WHERE id = ?", [
            req.params.id,
        ]);
        if (rows.length === 0)
            return res.status(404).json({ erro: "Livro não encontrado" });
        res.json(rows[0]);
    } catch (err) {
        res.status(500).json({ erro: err.message });
    }
};

export async function AtualizarLivros(req, res) {
    try {
        const { nome, email, senha, data_de_nascimento, celular, curso, perfil } = req.body;
        await db.execute(
            "UPDATE livros SET nome = ?, email = ?, senha = ?, data_de_nascimento = ?, celular= ?, curso = ?, perfil = ? WHERE id = ?", [nome, email, senha, data_de_nascimento, celular, curso, perfil, req.params.id]
        );
        res.json({ mensagem: "Usuário atualizado com sucesso!" });
    } catch (err) {
        res.status(500).json({ erro: err.message });
    }
};


export async function DeletarLivros(req, res) {
    try {
        await db.execute("DELETE FROM livros WHERE id = ?", [req.params.id]);
        res.json({ mensagem: "Livro deletado com sucesso!" });
    } catch (err) {
        res.status(500).json({ erro: err.message });
    }
};