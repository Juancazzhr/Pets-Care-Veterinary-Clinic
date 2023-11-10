package com.petscare.mspet.repository;


import com.petscare.mspet.model.PetClinicalHistory;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface IPetClinicalHistory extends JpaRepository<PetClinicalHistory, Long> {
}
