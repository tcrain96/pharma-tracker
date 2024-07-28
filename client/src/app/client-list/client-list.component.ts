import { Component, OnInit } from '@angular/core';
import {FormsModule, NgForm} from '@angular/forms';
import { Client } from '../models/client';
import { ClientService } from '../client.service';
import { NgFor, NgIf } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-client-list',
  templateUrl: './client-list.component.html',
  standalone:true,
  styleUrl:"./client-list.component.css",
  imports:[NgIf, NgFor, FormsModule,HttpClientModule]
})

export class ClientListComponent implements OnInit {
  
  clients: Client[] = [];
  newClient: Client = new Client();
  editing: boolean = false;
  editingClient: Client = new Client();

  constructor(
    private clientService: ClientService,
  ) {}

  ngOnInit(): void {
    this.getAllClients();
  }

  getAllClients(): void {
    this.clientService.getAllClients().subscribe(clients => this.clients = clients );    
  }

  createClient(clientForm: NgForm): void {
    this.clientService.createClient(this.newClient).subscribe(createClient => {        
        clientForm.reset();
        this.newClient = new Client();
        this.clients.unshift(createClient)
      });
  }

  deleteClient(id: string): void {
    this.clientService.deleteClient(id).subscribe(() => {
      this.clients = this.clients.filter(client => client.id != id);
    });
  }

  updateClient(id:string, clientData: Client): void {
    this.clientService.updateClient(id,clientData).subscribe(() => {
      this.ngOnInit();
      this.clearEditing();
    });
  }

  editClient(clientData: Client): void {
    this.editing = true;
    Object.assign(this.editingClient, clientData);
  }

  clearEditing(): void {
    this.editingClient = new Client();
    this.editing = false;
  }
}