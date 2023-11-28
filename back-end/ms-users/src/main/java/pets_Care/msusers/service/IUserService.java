package pets_Care.msusers.service;

import org.springframework.http.ResponseEntity;
import pets_Care.msusers.client.IClientServiceClient;
import pets_Care.msusers.client.IProfessionalServiceClient;
import pets_Care.msusers.model.User;

import java.util.List;
import java.util.Optional;

public interface IUserService {

    List<User> listUsers();
    Optional<User> searchUserById(Long id);
    User createUser(User user);
    void deleteUser(Long id) throws Exception;
    User updateUser(User user) throws Exception;
    Optional<User> findUserByEmail(String mail);

    //CLIENTS
    ResponseEntity<String> createClient(IClientServiceClient.ClientDTO clientDTO);
    List<IClientServiceClient.ClientDTO> listClients();

    Optional<IClientServiceClient.ClientDTO> searchClientById(Long id);

    void deleteClient(Long id);
    void updateCLient(IClientServiceClient.ClientDTO clientDTO);

    //PROFESSIONALS
    ResponseEntity<String> createProfessional(IProfessionalServiceClient.ProfessionalDTO professionalDTO);
    List<IProfessionalServiceClient.ProfessionalDTO> listProfessionals();
    void deleteProfessional(Long id);
    void updateProfessional(IProfessionalServiceClient.ProfessionalDTO professionalDTO);

}
