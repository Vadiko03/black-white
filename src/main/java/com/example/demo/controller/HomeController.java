package com.example.demo.controller; // Prima avevi "com.example.demo.controller"

import com.example.demo.model.Felpa;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import java.util.List;

@Controller
public class HomeController {

@GetMapping("/")
public String index(Model model) {
    List<Felpa> lista = List.of(
        new Felpa(1L, "Felpa Nera Minimal", 39.90),
        new Felpa(2L, "Felpa Bianca Hoodie", 39.90)
    );
    
    model.addAttribute("listaFelpe", lista);
    System.out.println("DEBUG: Sto a passà " + lista.size() + " felpe al template!");
    return "index";
}
}