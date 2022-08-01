import React, { useEffect, useState } from "react";
import { BsGridFill } from "react-icons/bs";
import { FaBars } from "react-icons/fa";
import axios from "axios";
import ApplicationGrid from "./ApplicationGrid";
import ApplicationList from "./ApplicationList";
import { Oval } from "react-loader-spinner";
import Filter from "./Filter";
import { motion, AnimatePresence } from "framer-motion";

const Applications = () => {
    const [posts, setPosts] = useState([]);
    const [category, setCategory] = useState(1);
    const [page, setPage] = useState(1);
    const [limit, setLimit] = useState(6);
    const [loading, setLoading] = useState(true);

    const [selectedFilter, setSelectedFilter] = useState("ALL");
    const [lastSelectedFilter, setLastSelectedFilter] = useState(selectedFilter);

    const [lockLoading, setLockLoading] = useState(false);

    const handleScroll = () => {
        const bottom =
            Math.ceil(window.innerHeight + window.scrollY) >= document.documentElement.scrollHeight;

        if (bottom) {
            setLoading(true);
        }
    };

    const resetResults = () => {
        setPosts([]);
        setPage(1);
        setLockLoading(false);
        setLoading(true);
    };

    const checkLocked = () => {
        setLoading(false);
    };

    const fetchByPage = async () => {
        if (lockLoading) return checkLocked();

        try {
            const res = await axios.get(`http://localhost:4000/posts?_page=${page}`);

            if (res.data.length === 0) {
                setLoading(false);
                setLockLoading(true);
                return;
            }

            setTimeout(() => {
                setPosts([...posts, ...res.data]);
                setLoading(false);
            }, [1000]);

            setPage(page + 1);

            return res;
        } catch (error) {
            console.log(error);
        }
    };

    const fetchByCategories = async () => {
        if (lockLoading) return checkLocked();

        try {
            const res = await axios.get(
                `http://localhost:4000/posts?category=${selectedFilter.toLowerCase()}&_page=${page}`
            );

            if (res.data.length === 0) {
                setLoading(false);
                setLockLoading(true);
                return;
            }

            setTimeout(() => {
                setPosts([...posts, ...res.data]);
                setLoading(false);
            }, [1000]);

            setPage(page + 1);

            return res;
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        resetResults();
    }, [selectedFilter]);

    useEffect(() => {
        if (selectedFilter === "ALL" && loading) {
            fetchByPage();
        } else if (selectedFilter !== "ALL" && loading) {
            fetchByCategories();
        }
    }, [loading, selectedFilter]);

    useEffect(() => {
        if (lockLoading) return;

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    });

    return (
        <div className="applications">
            <div className="applications__wrapper">
                <div className="applications__top">
                    <Filter setSelectedFilter={setSelectedFilter} selectedFilter={selectedFilter} />

                    <div className="control">
                        <BsGridFill
                            className={`icon ${category === 1 ? "active" : ""}`}
                            onClick={() => setCategory(1)}
                        />
                        <FaBars
                            className={`icon ${category === 2 ? "active" : ""}`}
                            onClick={() => setCategory(2)}
                        />
                    </div>
                </div>

                <div className={`applications__main ${category === 2 ? "list" : ""}`}>
                    <AnimatePresence>
                        {posts.map((post, index) => (
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                transition={{ duration: 0.2 }}
                                key={index}
                            >
                                {category === 1 ? (
                                    <ApplicationGrid post={post} />
                                ) : (
                                    <ApplicationList post={post} />
                                )}
                            </motion.div>
                        ))}
                    </AnimatePresence>

                    <AnimatePresence>
                        {loading && (
                            <motion.div
                                className="loading"
                                initial={{ opacity: 0, width: 0, height: 0 }}
                                animate={{ opacity: 1, width: 46, height: 46 }}
                                exit={{ opacity: 0, width: 0, height: 0 }}
                            >
                                <Oval color="#2ecc71" />
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>

                {lockLoading && <span className="error">No more results. {posts.length} results found.</span>}
                {posts.length === 0 && <span className="error">No results found.</span>}
                {/* {<h4>Results {posts.length}.</h4>} */}
            </div>
        </div>
    );
};

export default Applications;
