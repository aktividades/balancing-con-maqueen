let Objetivo = 670
let Diferencia = 0
let DiferenciaAnterior = 0
let DeltaY = 0
let Kp = 1
let Ki = 1
let Kd = 1
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
    Respuesta = Kp * Math.map(Diferencia, -200, 200, -128, 128) + Kd * Math.map(Velocidad, -10, 10, -128, 128)
    if (Respuesta >= 0) {
        maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, Math.abs(Respuesta))
    } else {
        maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CCW, Math.abs(Respuesta))
    }
})
