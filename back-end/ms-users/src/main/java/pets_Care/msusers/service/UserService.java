package pets_Care.msusers.service;

import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import pets_Care.msusers.client.IClientServiceClient;
import pets_Care.msusers.client.IProfessionalServiceClient;
import pets_Care.msusers.model.User;
import pets_Care.msusers.repository.IUserRepository;

import javax.swing.text.html.Option;
import java.util.List;
import java.util.Optional;

@Service
public class UserService implements IUserService {

    IUserRepository repository;
    IClientServiceClient clientRepository;

    IProfessionalServiceClient professionalRepository;

    public UserService(IUserRepository repository, IClientServiceClient clientRepository, IProfessionalServiceClient professionalRepository) {
        this.repository = repository;
        this.clientRepository = clientRepository;
        this.professionalRepository = professionalRepository;
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

    //CLIENTS

    @Override
    public ResponseEntity<String> createClient(IClientServiceClient.ClientDTO clientDTO) {
        return clientRepository.createClient(clientDTO);
    }

    @Override
    public List<IClientServiceClient.ClientDTO> listClients() {
        return clientRepository.listClients();
    }

    @Override
    public Optional<IClientServiceClient.ClientDTO> searchClientById(Long id) {
        return clientRepository.listClientById(id);
    }

    @Override
    public void deleteClient(Long id) {
        clientRepository.deleteClient(id);
    }

    @Override
    public void updateCLient(IClientServiceClient.ClientDTO clientDTO) {
        clientRepository.updateClient(clientDTO);
    }

    //PROFESSIONALS
    @Override
    public ResponseEntity<String> createProfessional(IProfessionalServiceClient.ProfessionalDTO professionalDTO) {
        return professionalRepository.createProfessional(professionalDTO);
    }

    @Override
    public List<IProfessionalServiceClient.ProfessionalDTO> listProfessionals() {
        return professionalRepository.listProfessionals();
    }

    @Override
    public void deleteProfessional(Long id) {
        professionalRepository.deleteProfessional(id);
    }

    @Override
    public void updateProfessional(IProfessionalServiceClient.ProfessionalDTO professionalDTO) {
        professionalRepository.updateProfessional(professionalDTO);
    }

    @Override
    public Optional<User> findUserByEmail(String mail) {
        return repository.findUserByEmail(mail);
    }
}
