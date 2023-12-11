package petsCare.msappointment.controller;

import org.json.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import petsCare.msappointment.model.Appointment;
import petsCare.msappointment.model.Email;
import petsCare.msappointment.service.AppointmentService;

import java.net.HttpURLConnection;
import java.net.URL;
import java.text.SimpleDateFormat;
import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.Date;
import java.util.List;
import java.util.Scanner;
import java.util.TimeZone;

@RestController
@RequestMapping("v1/appointments")
public class AppointmentController {

    AppointmentService service;

    @Autowired
    private Email emailService;

    public AppointmentController(AppointmentService service) {
        this.service = service;
    }

    @PostMapping
    public ResponseEntity<String> create(@RequestBody Appointment appointment){
        service.createAppointment(appointment);

        //Endpoints
        //String userUrl = "http://localhost:8080/v1/users/"+appointment.getProfessionalID();
        //String petUrl = "http://localhost:8080/v1/pets/"+appointment.getPetID();
        //String serviceUrl = "http://localhost:8080/v1/services/"+appointment.getServiceID();
        String userUrl = "http://ec2-34-229-209-114.compute-1.amazonaws.com/dev/v1/users/"+appointment.getProfessionalID();
        String petUrl = "http://ec2-34-229-209-114.compute-1.amazonaws.com/dev/v1/pets/"+appointment.getPetID();
        String serviceUrl = "http://ec2-34-229-209-114.compute-1.amazonaws.com/dev/v1/services/"+appointment.getServiceID();

        try {
            //Connection with User
            URL url = new URL(userUrl);
            HttpURLConnection conn = (HttpURLConnection) url.openConnection();
            conn.setRequestMethod("GET");
            conn.connect();
            StringBuilder informationUser = new StringBuilder();
            Scanner scanner = new Scanner (url.openStream());
            while(scanner.hasNext()){
                informationUser.append(scanner.nextLine());
            }
            scanner.close();

            //Connection with Pet
            URL url2 = new URL(petUrl);
            HttpURLConnection conn2 = (HttpURLConnection) url2.openConnection();
            conn2.setRequestMethod("GET");
            conn2.connect();
            StringBuilder informationPet = new StringBuilder();
            Scanner scanner2 = new Scanner (url2.openStream());
            while(scanner2.hasNext()){
                informationPet.append(scanner2.nextLine());
            }
            scanner2.close();

            //Queries to user json
            JSONObject userJson = new JSONObject(informationUser.toString());
            JSONObject userObject = userJson.getJSONObject("user");
            String userName = userObject.getString("firstName");
            String lastName = userObject.getString("lastName");

            //Queries to pet json
            JSONObject petJson = new JSONObject(informationPet.toString());
            String petName = petJson.getString("name");
            String clientId = String.valueOf(petJson.get("clientId"));

            //Connection with Client
            //String clientUrl = "http://localhost:8080/v1/users/"+clientId;
            String clientUrl = "http://ec2-34-229-209-114.compute-1.amazonaws.com/dev/v1/users/"+clientId;
            URL url3 = new URL(clientUrl);
            HttpURLConnection conn3 = (HttpURLConnection) url3.openConnection();
            conn3.setRequestMethod("GET");
            conn3.connect();
            StringBuilder informationClient = new StringBuilder();
            Scanner scanner3 = new Scanner (url3.openStream());
            while(scanner3.hasNext()){
                informationClient.append(scanner3.nextLine());
            }
            scanner3.close();

            //Queries to client json
            JSONObject clientJson = new JSONObject(informationClient.toString());
            JSONObject clientObject = clientJson.getJSONObject("user");
            String clientEmail = clientObject.getString("email");

            //Connection with Service
            URL url4 = new URL(serviceUrl);
            HttpURLConnection conn4 = (HttpURLConnection) url4.openConnection();
            conn4.setRequestMethod("GET");
            conn4.connect();
            StringBuilder informationService = new StringBuilder();
            Scanner scanner4 = new Scanner (url4.openStream());
            while(scanner4.hasNext()){
                informationService.append(scanner4.nextLine());
            }
            scanner4.close();

            //Queries to service json
            JSONObject serviceJson = new JSONObject(informationService.toString());
            String serviceName = serviceJson.getString("name");

            // Formatea la fecha del JSON
            SimpleDateFormat outputFormatter = new SimpleDateFormat("dd-MM-yyyy HH:mm");
            outputFormatter.setTimeZone(TimeZone.getTimeZone("UTC")); // Establecer la zona horaria deseada
            String formattedDate = outputFormatter.format(appointment.getDate());

            //Armado de mail
            String to = clientEmail;
            String subject = "Turno Creado";
            String text = "<div style=\"width: 90%;border: 1px solid #383b58; margin: auto;\">\n" +
                    "      <div style=\"width: 100%;background-color: #573469ff;color:#383b58;\">\n" +
                    "         <h1 style=\"padding: 0.5rem;color:#64c9a7ff;\">Pets Care</h1>\n" +
                    "         <h3 style=\"padding: 0.5rem;\">Gestión de turnos</h3> \n" +
                    "      </div>\n" +
                    "       <h3 style=\"padding: 0.5rem;color:#ffffffff;\">\n" +
                    "         Gracias por reservar un turno con nosotros!<br><br>\n" +
                    "\n" +
                    "         Datos del turno:<br></h3>\n" +
                            "<div style=\"padding: 1rem;color:#ffffffff;\">\n" +
                    "         Paciente: "+petName+"<br><br>\n" +
                    "\n" +
                    "         Profesional: "+userName+" "+lastName+" <br><br>\n" +
                    "\n" +
                    "         Servicio: "+serviceName+"<br><br>\n" +
                    "\n" +
                    "         Dia y Hora: "+formattedDate+"<br><br>\n" +
                    "\n" +
                    "         Te esperamos!<br><br>\n" +
                    "\n" +
                    "         Att: El equipo de Pets Care\n" +
                    "      </div>\n" +
                    "   </div>";
            emailService.sendEmail(to, subject, text);
        }catch (Exception e){
            e.printStackTrace();
        }
        return ResponseEntity.status(HttpStatus.CREATED).body("The appointment was successfully created.");
    }

    @GetMapping
    public List<Appointment> listAll(){
        return service.listAppointments();
    }

    @GetMapping("/{id}")
    public ResponseEntity<Appointment> searchById(@PathVariable Long id){
        if(service.searchAppointmentById(id).isPresent()){
            return ResponseEntity.ok(service.searchAppointmentById(id).get());
        }else{
            return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
        }
    }

    @PutMapping
    public ResponseEntity<Appointment> update(@RequestBody Appointment appointment) throws Exception{
        if(service.searchAppointmentById(appointment.getId()).isPresent()){
            return ResponseEntity.ok(service.updateAppointment(appointment));
        }else{
            ResponseEntity.status(HttpStatus.NOT_FOUND).body("The appointment with id "+appointment.getId()+ " doesn't exist.");
            throw new Exception();
        }
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<String> delete(@PathVariable Long id) throws Exception{
        if(service.searchAppointmentById(id).isPresent()){
            service.deleteAppointment(id);
            return ResponseEntity.ok("The appointment was successfully deleted.");
        }else{
            ResponseEntity.status(HttpStatus.NOT_FOUND).body("The appointment with id "+id+" doesn't exist.");
            throw new Exception();
        }
    }
}
