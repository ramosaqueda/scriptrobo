 const argv = require('yargs')
            .command('crear', 'Crear un nuevo registro',{
                descripcion: {
                    demand: true,
                    alias: 'd',
                    desc: 'Descripción de la tarea'
                }
            })

            .command('actualizar', 'Actualiza un registro',{
                descripcion: {
                    demand: true,
                    alias: 'd',
                    desc: 'Descripción de la tarea'
                },
                completado : {
                    default:true,
                    alias:'c',
                    desc: 'Marca como compleado o pendiente'

                }
            })

            .help()
            .argv;
module.export = {
    arrgv
} 

