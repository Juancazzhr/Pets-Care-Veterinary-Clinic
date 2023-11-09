package com.petscare.msconsult.service;

import com.petscare.msconsult.model.Consult;

import java.util.List;
import java.util.Optional;

public interface IConsultService {
    List<Consult> getAllConsult();
    Optional<Consult> getConsultById(Long id);
    Consult createConsult(Consult consult);
    void deleteConsult(Long id) throws Exception;
    Consult updateConsult(Consult consult) throws Exception;
}
