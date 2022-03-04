import React from "react";
import { Routes, Route } from "react-router-dom";

// client
import ClientLayout from "./client/layouts/ClientLayout";
import ClientHomeScreen from "./client/screens/HomeScreen";
import AboutScreen from "./client/screens/AboutScreen";
import PostsScreen from "./client/screens/PostsScreen";

// admin
import AdminLayout from "./admin/layouts/AdminLayout";
import AdminHomeScreen from "./admin/screens/home/HomeScreen";
// posts
import AllPostsScreen from "./admin/screens/posts/AllPostsScreen";
import AddPostScreen from "./admin/screens/posts/AddPostScreen";
import CategoriesScreen from "./admin/screens/posts/CategoriesScreen";
import TagsScreen from "./admin/screens/posts/TagsScreen";
// media
import LibraryScreen from "./admin/screens/media/LibraryScreen";
import AddLibraryScreen from "./admin/screens/media/AddLibraryScreen";
// comments
import CommentsScreen from "./admin/screens/comments/CommentsScreen";
// users
import AllUsersScreen from "./admin/screens/users/AllUsersScreen";
import AddUserScreen from "./admin/screens/users/AddUserScreen";
import ProfileScreen from "./admin/screens/users/ProfileScreen";

const App = () => {
  return (
    <>
      <Routes>
        {/* client routes */}
        <Route path="/" element={<ClientLayout />}>
          <Route path="/" element={<ClientHomeScreen />} />
          <Route path="/posts" element={<PostsScreen />} />
          <Route path="/about" element={<AboutScreen />} />
        </Route>

        {/* admin routes */}
        <Route path="/admin" element={<AdminLayout />}>
          <Route path="/admin" element={<AdminHomeScreen />} />
          {/* post */}
          <Route path="/admin/post/all-posts" element={<AllPostsScreen />} />
          <Route path="/admin/post/add-new" element={<AddPostScreen />} />
          <Route path="/admin/post/categories" element={<CategoriesScreen />} />
          <Route path="/admin/post/tags" element={<TagsScreen />} />
          {/* media */}
          <Route path="/admin/media/library" element={<LibraryScreen />} />
          <Route path="/admin/media/add-new" element={<AddLibraryScreen />} />
          {/* comments */}
          <Route path="/admin/comments" element={<CommentsScreen />} />
          {/* users */}
          <Route path="/admin/users/all-users" element={<AllUsersScreen />} />
          <Route path="/admin/users/add-new" element={<AddUserScreen />} />
          <Route path="/admin/users/profile" element={<ProfileScreen />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
