package pets_Care.msusers.service;

import pets_Care.msusers.model.User;

import java.util.List;
import java.util.Optional;

public interface IUserService {

    List<User> listUsers();
    Optional<User> searchUserById(Long id);
    User createUser(User user);
    void deleteUser(Long id) throws Exception;
    User updateUser(User user) throws Exception;
}
