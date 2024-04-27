import {Table, TableHeader, TableColumn, TableBody, TableRow, TableCell} from "@nextui-org/react";

export default function NewDataTable ({ data }) {
    return (
        <Table>
        <TableHeader>
            <TableColumn>Código</TableColumn>
            <TableColumn>Descripción</TableColumn>
            <TableColumn>Categoría</TableColumn>
            <TableColumn>Anónimo</TableColumn>
        </TableHeader>
        <TableBody>
            {data?.map((item) => (
                <TableRow key={item?.codigo}>
                    <TableCell>{item.codigo}</TableCell>
                    <TableCell>{item?.description}</TableCell>
                    <TableCell>{item?.category}</TableCell>
                    <TableCell>{item?.anonymous ? 'Sí' : 'No'}</TableCell>
                </TableRow>
            ))}
        </TableBody>
    </Table>
    )
}