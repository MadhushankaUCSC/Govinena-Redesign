FROM node:16.13.1-alpine
WORKDIR /Govinena-Redesign
ENV PATH=".node_module/.bin:$PATH"
COPY . .
RUN npm run build
CMD ["npm","start"]