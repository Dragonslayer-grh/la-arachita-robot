input.onButtonPressed(Button.A, function () {
    Tinybit.CarCtrlSpeed(Tinybit.CarState.Car_Run, 255)
    basic.pause(200)
    Tinybit.CarCtrlSpeed(Tinybit.CarState.Car_Stop, 255)
})
basic.forever(function () {
	
})
