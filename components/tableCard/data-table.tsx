"use client"
import * as React from "react"
import {
  ColumnDef,
  flexRender,
  getCoreRowModel,
  getPaginationRowModel,
  ColumnFiltersState,
  getFilteredRowModel,
  useReactTable,
} from "@tanstack/react-table"

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../ui/table"

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select"

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "../ui/popover"


import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar"

import { Button } from "../ui/button"
import { Input } from "../ui/input"

interface DataTableProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[]
  data: TData[]
}

export function DataTable<TData, TValue>({
  columns,
  data,

}: DataTableProps<TData, TValue>) {
  const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>(
    []
  )
  const table = useReactTable({
    data,
    columns,

    state: {
      columnFilters,
    },
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    onColumnFiltersChange: setColumnFilters,
    getFilteredRowModel: getFilteredRowModel(),

  })

  return (
    <>

      {/* BAR RECHERCH */}
      <div className="rounded-md shadow-xl  max-w-full  ml-2 left-[149px] top-[90px] relative border">
        <p className=" font-bold bottom-[27px] text-slate-800  relative text-3xl">Rechercher de Titre</p>

        <Table className=" blog gap-2 grid-cols-2   relative bottom-9">
          <div className="  justify-between flex pl-36 pr-12 pt-14">
            <p className=" text-xl">Rechercher de Titre</p>

            <Button variant="outline"
              size="lg"
              className=" hover:bg-lime-40 text-white  bg-green-700"
              onClick={() => table.nextPage()}
              disabled={!table.getCanNextPage()}>
              Rechercher
            </Button>


          </div>
          <div className="grid-cols-8 gap2 relative top-4 flex pl-14">

            <div className=" mr-12  pr-12 absolute">
              <Input
                placeholder="Filter Title... "
                value={(table.getColumn("title")?.getFilterValue() as string) ?? ""}
                onChange={(event) =>
                  table.getColumn("title")?.setFilterValue(event.target.value)
                }
                className="max-w-sm w-[866px]  left-20 relative text-slate-400"
              />
            </div>
            <div className="grid-cols-8 ml-[460px] pl-24">

            </div>
            <div className="grid-cols-8 ml-44  pl-24">
              <Select >
                <SelectTrigger className=" p-3 text-slate-900">
                  <SelectValue placeholder="SelectTrigger" />
                </SelectTrigger>
                <SelectContent className="text-slate-400">
                  <SelectItem value="Oui">Oui</SelectItem>
                  <SelectItem value="no">No</SelectItem>


                </SelectContent>
              </Select>
            </div>
            <div className="grid-cols-8 ml-1  pl-12">
              <Select >
                <SelectTrigger className=" p-3 text-slate-900">
                  <SelectValue placeholder="Theme" />
                </SelectTrigger>
                <SelectContent className="text-slate-400">
                  <SelectItem value="Oui">Oui</SelectItem>
                  <SelectItem value="no">No</SelectItem>


                </SelectContent>
              </Select>
            </div>
            <div className="grid-cols-8 ml-1  pl-12">
              <Select >
                <SelectTrigger className=" p-3 text-slate-900">
                  <SelectValue placeholder="Theme" />
                </SelectTrigger>
                <SelectContent className="text-slate-400">
                  <SelectItem value="Oui">Oui</SelectItem>
                  <SelectItem value="no">No</SelectItem>


                </SelectContent>
              </Select>
            </div>

          </div>

        </Table>
        {/* FIN BAR RECHERCH */}

        {/* BTN AJOUTER POPUP */}

        <div className="top-12 z-20  relative  px-8">

          <div className="  justify-between flex pl-3  p-4">
            <p className=" text-blue-950 text-xl">Rechercher de Titre</p>

            <Button variant="outline"
              size="lg"
              className="hover:bg-lime-600 text-white border-0 h bg-green-700"
            >


              <Popover>
                <PopoverTrigger>Ajouter</PopoverTrigger>
                <div className="justify-center content-center left-52">
                  <PopoverContent className="text-gray-500   ">Place content Title

                    <div className=" px-10 caret-lime-200">
                      <label htmlFor=""> Tilel</label>
                      <Select >
                        <SelectTrigger className="  text-slate-900">
                          <SelectValue placeholder="Theme" />
                        </SelectTrigger>
                        <SelectContent className="text-slate-400">
                          <SelectItem value="Oui">Oui</SelectItem>
                          <SelectItem value="no">No</SelectItem>


                        </SelectContent>
                      </Select>
                    </div>

                    <div className=" p-9">
                      <label htmlFor="" > Tilel</label>
                      <Input placeholder="Titre" >
                      </Input >
                    </div>

                    <div className=" p-9">
                      <label htmlFor=""> Tilel</label>
                      <Input placeholder="Titre" >
                      </Input >
                    </div>

                    <div className="p-4 pl-9">

                      <Button variant="outline"
                        size="lg"
                        className=" hover:bg-lime-40 text-white  bg-green-700"
                      >
                        Envoyer
                      </Button>
                    </div>


                  </PopoverContent>
                </div>

              </Popover></Button>


          </div>

        </div>
        
        {/* FIN BTN AJOUTER POPUP */}

        {/* TABLE DATA */}

        <div className=" relative py-24 -mt-9 p-8 bg-white">
          <Table className="shadow-lg">
            
            {/* TABLE HEADER */}
            <TableHeader>
          


              {table.getHeaderGroups().map((headerGroup) => (

                <TableRow key={headerGroup.id}>
                  {/* ChekBox */}
                  <input type="checkbox" className="type-checkox-labeled m-3 ml-6 mr-1" />
                  {/* Fin ChekBox */}

                  {headerGroup.headers.map((header) => {
                    return (
                      <TableHead key={header.id}>
                        {header.isPlaceholder
                          ? null
                          : flexRender(
                            header.column.columnDef.header,
                            header.getContext()
                          )}
                      </TableHead>
                    )
                  })}
                </TableRow>
              ))}
            </TableHeader>
             {/* FIN TABLE HEADER */}
              {/* TABLE BODY */}
            <TableBody>
              {table.getRowModel().rows?.length ? (
                table.getRowModel().rows.map((row) => (
                  <TableRow
                    key={row.id}
                    data-state={row.getIsSelected() && "selected"}
                  >
                    <div className=" gap-3 flex">

                      {/* ChekBox */}
                      <input type="checkbox" className="type-checkox-labeled  ml-6 mr-1" />
                      {/* Fin ChekBox */}
                      <Avatar className=" ">
                        <a href="/view/{id}">
                          <AvatarImage src="/images/ellipse-1.png" />
                          <AvatarFallback>CN</AvatarFallback>
                        </a>
                      </Avatar>
                    </div>

                    {row.getVisibleCells().map((cell) => (
                      <>

                        <TableCell key={cell.id}>
                          <a href="/view/{id}"> </a>
                          {flexRender(cell.column.columnDef.cell, cell.getContext())}
                        </TableCell>

                      </>
                    ))}
                  </TableRow>
                ))
              ) : (
                <TableRow>
                  <TableCell colSpan={columns.length} className="h-24 text-center">
                    No results.
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
             {/* FIN TABLE BODY */}
          </Table>
        </div>
      </div>
      {/* PAGINATION */}
      <div className="flex items-center text-slate-700 justify-end space-x-2 py-1">
        <Button
          variant="outline"
          size="sm"
          onClick={() => table.previousPage()}
          disabled={!table.getCanPreviousPage()}
        >
          Previous
        </Button>
        <Button
          variant="outline"
          size="sm"
          onClick={() => table.nextPage()}
          disabled={!table.getCanNextPage()}
        >
          Next
        </Button>
      </div>
    </>

  )
}
