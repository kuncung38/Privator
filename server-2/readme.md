## LIST OF ENDPOINTS

&nbsp;
&nbsp;

## User Endpoints

### POST /student/register - Register user baru

> (Yang wajib diisi pas register -> email, password, fullname, location )

### POST /student/login - Login user

&nbsp;
&nbsp;

## Instructor Endpoints

### GET /instructor - Liat semua instructor

### GET /instructor/:id - Liat detail satu instructor beserta course yang dia ajarkan dan jadwalnya

### POST /instructor/register - Buat instructor baru

> (Yang wajib diisi pas register -> email, password, fullname, location )

### POST /instructor/login - Login instructor

&nbsp;
&nbsp;

## Course Endpoints

### GET /course - Liat semua course beserta instructor dan ketegorinya

### GET /course/:id - Liat detail satu course beserta instructor dan ketegorinya

### GET /course/categories - Liat semua category beserta course yang ada di dalamnya

### GET /course/categories/:id - Liat detail satu category beserta course yang ada di dalamnya

### POST /course - Buat course baru

&nbsp;
&nbsp;

## Booking Endpoints

### GET /booking - Liat semua booking punya student yang lagi login

### POST /booking/:courseId - Booking course yang dipilih, course id nya diambil dari params

### GET /booking/:id - Liat detail booking (plus ada form disini isi nama hari)

### PATCH /booking/payBooking/:id - Update status booking jadi paid (bayar booking), data schedule untuk instuctor terbuat otomatis

&nbsp;
&nbsp;

## Schedule Endpoints

### GET /schedule - Liat semua schedule punya instructor yang lagi login

### DELETE /schedule/completeSchedule/:id - Hapus schedule

> Instruktur pencet complete schedule, jadwalnya dihapus dan status bookingnya jadi complete
