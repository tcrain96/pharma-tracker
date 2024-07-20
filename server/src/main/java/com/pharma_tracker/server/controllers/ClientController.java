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
    public  Client updateClient(@PathVariable("id") String id, @RequestBody Client client) {
        Client data = clientRepository.findById(id).orElse(null);
        if(data != null){
            data.setName(client.getName());
            data.setProducts(client.getProducts());
            return clientRepository.save((data));
        }
        else{
            return client;
        }
    }

    //Delete client based off ID
    @DeleteMapping(value="deleteClient/{id}")
    public void deleteTodo(@PathVariable("id") String id) {
        clientRepository.deleteById(id);
    }
}