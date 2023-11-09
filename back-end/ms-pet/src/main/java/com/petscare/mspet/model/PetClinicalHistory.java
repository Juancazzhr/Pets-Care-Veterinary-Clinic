package com.petscare.mspet.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.Data;

import java.time.LocalDate;

@Data
@Entity
@Table(name = "PetClinicalHistory")
public class PetClinicalHistory {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "created_at")
    private LocalDate cratedAt;

    @Column(name = "last_update")
    private LocalDate lastUpdate;

    @Column(name = "weigth")
    private Double weigth;

    @OneToOne
    @JsonIgnore
    @JoinColumn(name = "pet_id")
    private Pet pet;



}

