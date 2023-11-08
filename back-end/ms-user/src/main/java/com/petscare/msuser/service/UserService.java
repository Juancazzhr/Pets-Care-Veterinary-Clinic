package com.petscare.msuser.service;

import com.petscare.msuser.model.User;
import com.petscare.msuser.repository.IUserRepository;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class UserService implements IUserService{

    IUserRepository repository;

    public UserService(IUserRepository repository) {this.repository = repository;}

    @Override
    public List<User>getAll() {return repository.findAll();}

    @Override
    public Optional<User> getUserById(Long id) {return repository.findById(id);}

    @Override
    public User createUser(User user) {return repository.save(user);}

    @Override
    public void deleteUser(Long id) throws Exception {
        Optional<User> userSearched = getUserById(id);
        if(userSearched.isPresent()){
            repository.deleteById(id);
        }else{
            throw new Exception("El usuario con el id = "+id+" no existe. Ingrese un id correcto");
        }
    }

    @Override
    public User updateUser(User user) throws Exception {
        Optional<User> userSearched = getUserById(user.getId());
        if(userSearched.isPresent()){
            return repository.save(user);
        }else{
            throw new Exception("El usuario con el id = "+ user.getId()+" no existe. Ingrese un id correcto");
        }
    }
}
