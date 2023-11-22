package com.petscare.mspet.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.Data;

import java.time.LocalDate;

@Data
@Entity
@Table(name = "PetClinicalHistories")
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

    public PetClinicalHistory() {
    }

    public PetClinicalHistory(LocalDate cratedAt) {
        this.cratedAt = cratedAt;
    }

    public PetClinicalHistory(Long id, LocalDate cratedAt, LocalDate lastUpdate, Double weigth, Pet pet) {
        this.id = id;
        this.cratedAt = cratedAt;
        this.lastUpdate = lastUpdate;
        this.weigth = weigth;
        this.pet = pet;
    }

    public PetClinicalHistory(LocalDate cratedAt, Pet pet) {
        this.cratedAt = cratedAt;
        this.pet = pet;
    }

    public PetClinicalHistory(LocalDate cratedAt, LocalDate lastUpdate, Double weigth, Pet pet) {
        this.cratedAt = cratedAt;
        this.lastUpdate = lastUpdate;
        this.weigth = weigth;
        this.pet = pet;
    }
}

