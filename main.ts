let Objetivo = 670
let Diferencia = 0
let DiferenciaAnterior = 0
let DeltaY = 0
let Kp = 0
let Ki = 0
let Kd = 0
let Velocidad = 0
let TimeAnterior = 0
let DeltaTime = 0
let Respuesta = 0
basic.forever(function () {
    Diferencia = Objetivo - input.acceleration(Dimension.Y)
    DeltaY = Diferencia - DiferenciaAnterior
    DiferenciaAnterior = Diferencia
    DeltaTime = input.runningTimeMicros() - TimeAnterior
    TimeAnterior = input.runningTimeMicros()
    Velocidad = DeltaY / DeltaTime
    Respuesta = Kp * 0 + Kd * 0
    if (Respuesta >= 0) {
        maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, Respuesta)
    } else {
        maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CCW, Respuesta)
    }
})
