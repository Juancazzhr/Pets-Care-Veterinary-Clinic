package petcareveterinary.employees.service;

import petcareveterinary.employees.client.IAppointmentServiceClient;
import petcareveterinary.employees.client.IServicesProfessionalServiceClient;
import petcareveterinary.employees.model.Professional;

import java.util.List;
import java.util.Optional;

public interface IProfessionalService {

    List<Professional> listProfessionals();

    Optional<Professional> searchProfessionalById(Long id);

    Professional createProfessional(Professional professional);

    void deleteProfessional(Long id) throws Exception;

    Professional updateProfessional(Professional professional) throws Exception;

    List<IServicesProfessionalServiceClient.ServiceDTO> listServices();
    List<IAppointmentServiceClient.AppointmentDTO> listAppointments();

}
