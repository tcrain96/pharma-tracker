package com.pharma_tracker.server.controllers;

import com.pharma_tracker.server.models.Client;
import com.pharma_tracker.server.repositories.ClientRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import java.util.List;
import org.springframework.web.bind.annotation.GetMapping;


@RestController
public class ClientController {

    @Autowired
    ClientRepository clientRepository;

    //Get all clients
     @GetMapping("/")
     public List<Client> getAllClients() {
         return clientRepository.findAll();
     }

     //Create a new client
    @PostMapping("/createClient")
     public Client createClient( @RequestBody Client client) {
         return clientRepository.save(client);
    }

    //Update client based off ID
    @PutMapping(value="updateClient/{id}")
    public  void updateClient(@PathVariable("id") int id, @RequestBody Client client) {
        Client data = clientRepository.findById(id).orElse(null);
        if(data != null){
            data.setName(client.getName());
            data.setProducts(client.getProducts());
            clientRepository.save((data));
        }
    }

    //Delete client based off ID
    @DeleteMapping(value="deleteClient/{id}")
    public void deleteTodo(@PathVariable("id") int id) {
        clientRepository.deleteById(id);
    }
}