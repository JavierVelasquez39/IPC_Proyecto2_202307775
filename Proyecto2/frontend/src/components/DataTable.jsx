import {Table, TableHeader, TableColumn, TableBody, TableRow, TableCell, getKeyValue, table} from "@nextui-org/react";

export default function DataTable ({ data }) {
    return (
        <Table>
        <TableHeader>
            <TableColumn>Código</TableColumn>
            <TableColumn>Nombres</TableColumn>
            <TableColumn>Apellidos</TableColumn>
            <TableColumn>Género</TableColumn>
            <TableColumn>Facultad</TableColumn>
            <TableColumn>Carrera</TableColumn>
            <TableColumn>Correo</TableColumn>
            <TableColumn>Contraseña</TableColumn>
        </TableHeader>
        <TableBody>
            {data?.map((user) => (
                <TableRow key={user?.codigo}>
                    <TableCell>{user.codigo}</TableCell>
                    <TableCell>{user?.nombres}</TableCell>
                    <TableCell>{user?.apellidos}</TableCell>
                    <TableCell>{user?.genero}</TableCell>
                    <TableCell>{user?.facultad}</TableCell>
                    <TableCell>{user?.carrera}</TableCell>
                    <TableCell>{user?.email}</TableCell>
                    <TableCell>{user?.password}</TableCell>
                </TableRow>
            ))}
        </TableBody>
    </Table>
    )
}