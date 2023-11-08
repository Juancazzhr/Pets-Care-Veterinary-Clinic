package pets_Care.msusers.service;


import pets_Care.msusers.model.Rol;

import java.util.List;
import java.util.Optional;

public interface IRolService {

    List<Rol> listRoles();
    Optional<Rol> searchRolById(Long id);
    Rol createRol(Rol rol);
    void deleteRol(Long id) throws Exception;
}
