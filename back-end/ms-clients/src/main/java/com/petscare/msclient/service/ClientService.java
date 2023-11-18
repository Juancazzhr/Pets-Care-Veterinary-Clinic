package com.petscare.msclient.service;

import com.petscare.msclient.model.Client;
import com.petscare.msclient.repository.IClientRepository;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ClientService implements IClientService {

    IClientRepository repository;

    public ClientService(IClientRepository repository) {
        this.repository = repository;
    }

    @Override
    public List<Client>getAll() {return repository.findAll();}

    @Override
    public Optional<Client> getClientById(Long id) {return repository.findById(id);}

    @Override
    public Client createClient(Client user) {return repository.save(user);}

    @Override
    public void deleteClient(Long id) throws Exception {
        Optional<Client> userSearched = getClientById(id);
        if(userSearched.isPresent()){
            repository.deleteById(id);
        }else{
            throw new Exception("El usuario con el id = "+id+" no existe. Ingrese un id correcto");
        }
    }

    @Override
    public Client updateClient(Client user) throws Exception {
        Optional<Client> userSearched = getClientById(user.getId());
        if(userSearched.isPresent()){
            return repository.save(user);
        }else{
            throw new Exception("El usuario con el id = "+ user.getId()+" no existe. Ingrese un id correcto");
        }
    }
}
