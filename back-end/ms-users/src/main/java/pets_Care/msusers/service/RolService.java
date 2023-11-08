package pets_Care.msusers.service;

import org.springframework.stereotype.Service;
import pets_Care.msusers.model.Rol;
import pets_Care.msusers.repository.IRolRepository;

import java.util.List;
import java.util.Optional;

@Service
public class RolService implements IRolService{

    IRolRepository repository;

    public RolService(IRolRepository repository) {
        this.repository = repository;
    }

    @Override
    public List<Rol> listRoles() {
        return repository.findAll();
    }

    @Override
    public Rol createRol(Rol rol) {
        return repository.save(rol);
    }

    @Override
    public Optional<Rol> searchRolById(Long id) {
        return repository.findById(id);
    }

    @Override
    public void deleteRol(Long id) throws Exception {
        Optional<Rol> rolSearched = searchRolById(id);
        if(rolSearched.isPresent()){
            repository.deleteById(id);
        }else{
            throw new Exception("The rol with id "+id+" doesn't exist." );
        }
    }
}
