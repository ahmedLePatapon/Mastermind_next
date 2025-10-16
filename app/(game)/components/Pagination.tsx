"use client";
import React from "react";

type PaginationProps = {
    totalItems: number; // nombre total de joueurs
    itemsPerPage: number; // joueurs affichés par page
    currentPage: number; // page actuelle
    onPageChange: (page: number) => void; // callback quand on change de page
};

export default function Pagination({
    totalItems,
    itemsPerPage,
    currentPage,
    onPageChange,
}: PaginationProps) {
    const totalPages = Math.ceil(totalItems / itemsPerPage);
    const maxVisiblePages = 5;

    // Fonction pour calculer les pages visibles autour de la page actuelle
    const getVisiblePages = () => {
        let start = Math.max(1, currentPage - Math.floor(maxVisiblePages / 2));
        let end = Math.min(totalPages, start + maxVisiblePages - 1);
        if (end - start < maxVisiblePages - 1) start = Math.max(1, end - maxVisiblePages + 1);
        return Array.from({ length: end - start + 1 }, (_, i) => start + i);
    };

    if (totalPages <= 1) return null;

    return (
        <div className="flex items-center justify-center p-4">
            {/* Bouton précédent */}
            <button
                disabled={currentPage === 1}
                onClick={() => onPageChange(currentPage - 1)}
                className={`flex size-10 items-center justify-center ${currentPage === 1 ? "text-white/20" : "text-white/50 hover:text-white"
                    }`}
            >
                <span className="material-symbols-outlined">chevron_left</span>
            </button>

            {/* Numéros de pages */}
            {getVisiblePages().map((page) => (
                <button
                    key={page}
                    onClick={() => onPageChange(page)}
                    className={`text-sm flex size-10 items-center justify-center rounded-full transition-colors ${page === currentPage
                            ? "bg-primary text-white font-bold"
                            : "text-white hover:bg-primary/30 font-normal"
                        }`}
                >
                    {page}
                </button>
            ))}

            {/* Bouton suivant */}
            <button
                disabled={currentPage === totalPages}
                onClick={() => onPageChange(currentPage + 1)}
                className={`flex size-10 items-center justify-center ${currentPage === totalPages ? "text-white/20" : "text-white/50 hover:text-white"
                    }`}
            >
                <span className="material-symbols-outlined">chevron_right</span>
            </button>
        </div>
    );
}
