package com.petscare.mspet.model;

import com.fasterxml.jackson.annotation.JsonBackReference;
import jakarta.persistence.*;
import lombok.*;

@Data
@Entity
@Table(name="Pets")
public class Pet {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @Column
    private String name;
    @Column
    private String size;
    @Column
    private String race;
    @Column
    private Long clientId;

    @ManyToOne
    @JoinColumn(name = "type_id", referencedColumnName = "id")
    private PetType petType;


    @OneToOne(mappedBy = "pet", cascade = CascadeType.ALL, fetch = FetchType.LAZY)
    private PetClinicalHistory petClinicalHistory;



}
