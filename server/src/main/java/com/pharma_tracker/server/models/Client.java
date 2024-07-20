package com.pharma_tracker.server.models;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Document(collection = "client")
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Client{

    @Id
    private String id;

    private String name;

    private boolean isActive = true;

    private String products;

}