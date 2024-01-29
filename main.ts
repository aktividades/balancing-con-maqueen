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
basic.forever(function () {
    Diferencia = input.acceleration(Dimension.Y)
    DeltaY = Diferencia - DiferenciaAnterior
    DeltaTime = input.runningTimeMicros() - TimeAnterior
    TimeAnterior = input.runningTimeMicros()
    Velocidad = DeltaY / DeltaTime
    DiferenciaAnterior = Diferencia
})
