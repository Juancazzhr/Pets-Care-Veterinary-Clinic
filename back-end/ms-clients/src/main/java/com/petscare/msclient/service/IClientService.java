package com.petscare.msclient.service;

import com.petscare.msclient.model.Client;

import java.util.List;
import java.util.Optional;

public interface IClientService {
    List<Client> getAll();

    Optional<Client> getClientById(Long id);

    Client createClient(Client user);

    void deleteClient(Long id) throws Exception;

    Client updateClient(Client user) throws Exception;
}
