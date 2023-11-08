package pets_Care.msusers.service;

import org.springframework.stereotype.Service;
import pets_Care.msusers.model.User;
import pets_Care.msusers.repository.IUserRepository;

import javax.swing.text.html.Option;
import java.util.List;
import java.util.Optional;

@Service
public class UserService implements IUserService {

    IUserRepository repository;

    public UserService(IUserRepository repository) {
        this.repository = repository;
    }

    @Override
    public List<User> listUsers() {
        return repository.findAll();
    }

    @Override
    public Optional<User> searchUserById(Long id) {
        return repository.findById(id);
    }

    @Override
    public User createUser(User user) {
        return repository.save(user);
    }

    @Override
    public void deleteUser(Long id) throws Exception {
        Optional<User> userSearched = searchUserById(id);
        if(userSearched.isPresent()){
            repository.deleteById(id);
        }else{
            throw new Exception("The User with id "+id+" doesn't exist.");
        }
    }

    @Override
    public User updateUser(User user) throws Exception {
        Optional<User> userSearched = searchUserById(user.getId());
        if(userSearched.isPresent()){
            return repository.save(user);
        }else{
            throw new Exception("The user with id "+user.getId()+" doesn't exist.");
        }
    }
}
