package com.pharma_tracker.server.repositories;


import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import com.pharma_tracker.server.models.Client;

@Repository
public interface ClientRepository extends MongoRepository<Client, Integer> {

}
