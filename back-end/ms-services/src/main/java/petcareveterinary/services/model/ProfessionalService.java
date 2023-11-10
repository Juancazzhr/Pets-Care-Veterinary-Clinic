package petcareveterinary.services.model;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@AllArgsConstructor
@NoArgsConstructor
@Data
@Entity
@Table(name = "Services")
public class ProfessionalService {
    @Id
    @SequenceGenerator(name = "service_sequence", sequenceName = "service_sequence")
    @GeneratedValue(strategy = GenerationType.IDENTITY, generator = "service_sequence")
    private Long id;
    @Column
    private String name;
    @Column
    private String description;
    @Column
    private String thumbnail;


    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getThumbnail() {
        return thumbnail;
    }

    public void setThumbnail(String thumbnail) {
        this.thumbnail = thumbnail;
    }
}





