package com.example.demo.model;

public class Felpa {
    private Long id;
    private String nome;
    private double prezzo;

    public Felpa(Long id, String nome, double prezzo) {
        this.id = id;
        this.nome = nome;
        this.prezzo = prezzo;
    }

    // QUESTI SONO FONDAMENTALI! Senza questi, l'HTML non vede nulla.
    public Long getId() { return id; }
    public String getNome() { return nome; }
    public double getPrezzo() { return prezzo; }
}