package com.petscare.msuser.service;

import com.petscare.msuser.model.User;

import java.util.List;
import java.util.Optional;

public interface IUserService {
    List<User> getAll();

    Optional<User> getUserById(Long id);

    User createUser(User user);

    void deleteUser(Long id) throws Exception;

    User updateUser(User user) throws Exception;
}
